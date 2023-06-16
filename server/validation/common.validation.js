import joi from "joi";

export const validateId = (id) => {
  const schema = joi.object({
    _id: joi.string().required(),
  });

  return schema.validateAsync(id);
};

export const validateCategory = (category) => {
  const schema = joi.object({
    category: joi.string().required(),
  });

  return schema.validateAsync(category);
};

export const validateOrderDetails = (orderDetails) => {
  const schema = joi.object({
    food: joi.array().items(joi.object({
      details: joi.string().required(),
      quantity: joi.number().required(),
    })),
    payMode: joi.string().required(),
    status: joi.string().default("Placed"),
    paymentDetails: joi.object({
      itemTotal: joi.number().required(),
      promo: joi.string().required(),
      tax: joi.string().required(),
      razorpay_payment_id: joi.string().required()
    })
  });

  return schema.validateAsync(orderDetails);
};

export const validateRestaurantCity = (restaurantObject) => {
  const schema = joi.object({
    city: joi.string().required(),
  });

  return schema.validateAsync(restaurantObject);
};

export const validateSearchString = (restaurantObject) => {
  const schema = joi.object({
    searchString: joi.string().required(),
  });

  return schema.validateAsync(restaurantObject);
};

export const validateReviewData = (reviewData) => {
  const schema = joi.object({
    food: joi.string().required(),
    restaurant: joi.string().required(),
    user: joi.string().required(),
    rating: joi.number().required(),
    reviewText: joi.string().required(),
    isRestaurantReview: joi.boolean().required(),
    isFoodReview: joi.boolean().required(),
    photos: joi.string().required(),
  });

  return schema.validateAsync(reviewData);
};

export const validateUserData = (userData) => {
  const schema = joi.object({
    fullName: joi.string().required().min(5),
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    address: joi.array().items(joi.object({
      details: joi.string(),
      for: joi.string()
    })),
    phoneNumber: joi.array().items(joi.number().min(10).max(10)),
  });

  return schema.validateAsync(userData);
}