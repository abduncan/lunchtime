export class Response<T> {

    /** The data being retrieved. */
    public data: T;

    /** Represents if an error occurred
     * during the retrieval.
     */
    public isError: boolean;

    /** A message describing the error
     * if one occurred during the retrieval.
     */
    public errorMessage: string;
}