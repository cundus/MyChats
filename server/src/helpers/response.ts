import { Response } from "express";

// Helper function to send a success response
export function sendSuccessResponse(res: Response, data: any, message = "Success", status = 200): void {
   res.status(status).json({ status: "success", data, message });
}

// Helper function to send an error response
export function sendErrorResponse(res: Response, message: string, status = 400): void {
   res.status(status).json({ status: "error", message });
}
