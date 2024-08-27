type NativeEventType = "ROUTER_EVENT" | "AUTH_TOKEN_EVENT";
interface ISendNativeEventParams {
  type: NativeEventType;
  params: Record<string, string | Record<string, unknown>>;
}

export const sendNativeEvent = async ({
  type,
  params,
}: ISendNativeEventParams) => {
  window.ReactNativeWebView.postMessage(JSON.stringify({ type, ...params }));
};
