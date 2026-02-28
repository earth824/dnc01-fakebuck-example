export class ApiError extends Error {
  constructor(
    message: string,
    public code?: string
  ) {
    super(message);
  }
}

export type ApiSuccessData<T> = {
  data: T;
};
