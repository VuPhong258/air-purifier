import { z } from "zod";

export const roomSizeOptions = ["under-20", "20-40", "over-40"] as const;

export const roomSizeLabels: Record<(typeof roomSizeOptions)[number], string> = {
  "under-20": "Duoi 20m2",
  "20-40": "20-40m2",
  "over-40": "Tren 40m2",
};

export const newsletterSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Vui long nhap ho va ten toi thieu 2 ky tu.")
    .max(80, "Ho va ten khong vuot qua 80 ky tu."),
  email: z
    .string()
    .trim()
    .email("Email khong hop le.")
    .max(120, "Email khong vuot qua 120 ky tu."),
  phone: z
    .string()
    .trim()
    .regex(
      /^(0|\+84)(\d[\s.-]?){8,10}$/,
      "So dien thoai Viet Nam khong hop le.",
    ),
  roomSize: z.enum(roomSizeOptions, {
    error: "Vui long chon dien tich phong.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Nhu cau tu van can toi thieu 10 ky tu.")
    .max(600, "Nhu cau tu van khong vuot qua 600 ky tu."),
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
