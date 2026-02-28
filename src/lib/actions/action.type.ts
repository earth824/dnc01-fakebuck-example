type SuccessActionResult = {
  success: true;
};

export type ErrorActionResult = {
  success: false;
  message?: string;
  code?: string;
};

export type ActionResult = SuccessActionResult | ErrorActionResult;
