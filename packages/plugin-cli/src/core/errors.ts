export class CliInputError extends Error {
  readonly code = "CLI_INPUT_ERROR";
}

export class ScaffoldValidationError extends Error {
  readonly code = "SCAFFOLD_VALIDATION_ERROR";
}
