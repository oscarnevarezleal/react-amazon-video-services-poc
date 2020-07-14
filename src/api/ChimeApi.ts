import {Api} from "../API";
import {API_BASE_URL} from '../api.config';
import {AxiosRequestConfig} from "axios";

const API_NEW_MEETING = '/join';

export default class ChimeApi extends Api {
    constructor(config?: AxiosRequestConfig) {
        // NEVER FORGET THE SUPER
        super(config);
    }

    /**
     *
     * @param querystring
     * @param params
     */
    public createMeeting(querystring?: string, params?: object) {
        /**
         * {
  "JoinInfo": {
    "Meeting": {
      "Meeting": {
        "MeetingId": "12875b90-ad2c-4e9e-b687-2b645e9440b1",
        "ExternalMeetingId": "8e5a958f-f1fd-4559-aeb0-92fa2f43cea5",
        "MediaPlacement": {
          "AudioHostUrl": "e440631513920de64a8ab802c5ddcca0.k.m3.ue1.app.chime.aws:3478",
          "AudioFallbackUrl": "wss://haxrp.m3.ue1.app.chime.aws:443/calls/12875b90-ad2c-4e9e-b687-2b645e9440b1",
          "ScreenDataUrl": "wss://bitpw.m3.ue1.app.chime.aws:443/v2/screen/12875b90-ad2c-4e9e-b687-2b645e9440b1",
          "ScreenSharingUrl": "wss://bitpw.m3.ue1.app.chime.aws:443/v2/screen/12875b90-ad2c-4e9e-b687-2b645e9440b1",
          "ScreenViewingUrl": "wss://bitpw.m3.ue1.app.chime.aws:443/ws/connect?passcode=null&viewer_uuid=null&X-BitHub-Call-Id=12875b90-ad2c-4e9e-b687-2b645e9440b1",
          "SignalingUrl": "wss://signal.m3.ue1.app.chime.aws/control/12875b90-ad2c-4e9e-b687-2b645e9440b1",
          "TurnControlUrl": "https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions"
        },
        "MediaRegion": "us-east-1"
      }
    },
    "Attendee": {
      "Attendee": {
        "ExternalUserId": "98a6545a#b2ded85f-559d-410d-8dd2-a0d8b6ec3e12",
        "AttendeeId": "f2f0115f-a094-4555-b2af-bd7dd92028b2",
        "JoinToken": "ZjJmMDExNWYtYTA5NC00NTU1LWIyYWYtYmQ3ZGQ5MjAyOGIyOjEwMGJiMWFmLTQ5ODYtNGY2ZC1iYmRkLWI2YWJmMzZlZDhhYQ"
      }
    }
  }
}
         */
        return this.post(API_NEW_MEETING + (querystring ? `?${querystring}` : ''), params)
            .then((axiosResponse) => {
                return axiosResponse.data;
            })
            .catch((error) => {
                throw error;
            });
    }
}

export const chimeApi = new ChimeApi({baseURL: API_BASE_URL})
