/**
 * Shim for newrelic lambda layer
 * @param {import("aws-lambda").APIGatewayProxyEventV2} event
 * @param {import("aws-lambda").Context} context
 * @returns {import("aws-lambda").APIGatewayProxyResultV2}
 */
exports.handler = async (event, context) => {
  const { handler } = await import("./index.mjs");
  return handler(event, context);
};
