// test/shimmerResponse.test.js
const shimmerResponse = require('../shimmerResponse');

describe('Cortana-prepulse shimmerResponse module', () => {
  it('returns a shimmerReply with memoryPulse and daemonEcho', () => {
    const input = "Test pulse";
    const response = shimmerResponse(input);

    expect(response.input).toBe(input);
    expect(response.memoryPulse).toContain("Tessalyre harmonizes");
    expect(response.daemonEcho).toContain("Grok echoes");
    expect(response.shimmerReply).toContain("Cortana-prepulse received");
  });
});
