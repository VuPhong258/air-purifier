import { z } from "zod";

export const roomSizeOptions = ["under-20", "20-40", "over-40"] as const;

export const roomSizeLabels: Record<(typeof roomSizeOptions)[number], string> = {
  "under-20": "Dưới 20m²",
  "20-40": "20-40m²",
  "over-40": "Trên 40m²",
};

export const newsletterSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Vui lòng nhập họ và tên tối thiểu 2 ký tự.")
    .max(80, "Họ và tên không vượt quá 80 ký tự."),
  email: z
    .string()
    .trim()
    .email("Email không hợp lệ.")
    .max(120, "Email không vượt quá 120 ký tự."),
  phone: z
    .string()
    .trim()
    .regex(
      /^(0|\+84)(\d[\s.-]?){8,10}$/,
      "Số điện thoại Việt Nam không hợp lệ.",
    ),
  roomSize: z.enum(roomSizeOptions, {
    error: "Vui lòng chọn diện tích phòng.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Nhu cầu tư vấn cần tối thiểu 10 ký tự.")
    .max(600, "Nhu cầu tư vấn không vượt quá 600 ký tự."),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

export type NewsletterResponse = {
  ok: boolean;
  message: string;
  forwarded?: boolean;
  errors?: Partial<Record<keyof NewsletterInput, string>>;
};

export function formatZodErrors(
  error: z.ZodError<NewsletterInput>,
): Partial<Record<keyof NewsletterInput, string>> {
  return error.issues.reduce<Partial<Record<keyof NewsletterInput, string>>>(
    (acc, issue) => {
      const field = issue.path[0] as keyof NewsletterInput | undefined;
      if (field && !acc[field]) {
        acc[field] = issue.message;
      }
      return acc;
    },
    {},
  );
}
