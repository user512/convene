import { Controller } from "stimulus"
import VideoRoom from "../src/video_room";

export default class extends Controller {
  static targets = [ "wrapper" ]

  connect() {
    this.videoRoom = new VideoRoom(this.data.get('videoHost'), this.wrapperTarget);
    this.videoRoom.addEventListener('enteredRoom', () => {
      this.wrapperTarget.classList.add('active-room');
    });
    this.videoRoom.addEventListener('exitedRoom', () => {
      this.wrapperTarget.classList.remove('active-room');
    })
  }
}