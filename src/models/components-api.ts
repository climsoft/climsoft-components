/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: operations["status_check__get"];
  };
  "/exec": {
    get: operations["exec_test_exec_get"];
    post: operations["exec_post_exec_post"];
  };
}

export interface components {
  schemas: {
    /** HTTPValidationError */
    HTTPValidationError: {
      /** Detail */
      detail?: components["schemas"]["ValidationError"][];
    };
    /** ValidationError */
    ValidationError: {
      /** Location */
      loc: string[];
      /** Message */
      msg: string;
      /** Error Type */
      type: string;
    };
  };
}

export interface operations {
  status_check__get: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
  exec_test_exec_get: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
  exec_post_exec_post: {
    parameters: {
      query: {
        py_code_b64: string;
        fn_name?: unknown;
      };
    };
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
}

export interface external {}
