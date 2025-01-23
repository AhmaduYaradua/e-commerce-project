import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    transaction_reference: {
      transaction: String,
      status: String,
      trxref: String,
      message: String,
    },
    customer_delivery_info: {
      name: String,
      email: String,
      deliveryAddress: String,
    },
    user_cart_summary: {
      totalCartItemsCost: Number,
      totalCartItemsQty: Number,
    },
    cartItems: Array,
    order_status: {
      type: String,
      enum: {
        values: ["Pending", "Cancelled", "Completed"],
      },
      default: "Pending",
    },
  },
  { timestamps: true }
);

const orderModel = new mongoose.model("customer_orders", orderSchema);

export { orderModel };
