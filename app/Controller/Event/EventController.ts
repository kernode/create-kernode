class EventController {
  public onMessage(payload: any) {
    console.log(payload)
  }
}

export default new EventController()
