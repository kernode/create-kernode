class WebSocketController {
  public onMessage({ payload, socket }: any) {
    console.log(payload)
  }
}

export default new WebSocketController()
