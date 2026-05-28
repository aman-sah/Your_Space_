import Inquiry from "../models/inquiry.model.js";
import Property from "../models/property.model.js";

// buyer send inquiry
export const sendInquiry = async (req, res) => {
    try {
        const { propertyId, message } = req.body;
        const property = await Property.findById(propertyId).populate("seller");
        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Property not found"
            });
        }

        const inquiry = await Inquiry.create({
            property: property._id,
            buyer: req.user._id,
            seller: property.seller._id,
            message
        });
    }

    catch (error) {
    }
}