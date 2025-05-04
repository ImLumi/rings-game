import { mergeIntoObservable, observable } from '@legendapp/state';
import { socket } from '../socket';

type RoomState = {
  id: string;
  inviteCodes: {
    playerId: string;
    playerName: string;
    inviteCode: string;
  }[];
};

type AdminStore = {
  roomState: RoomState;
};

export const adminstore$ = observable<AdminStore>({
  roomState: {
    id: '',
    inviteCodes: [],
  },
});

socket.on('admin-room-status', (data) => {
  console.log('admin-room-status', data);
  mergeIntoObservable(adminstore$.roomState.inviteCodes, data.inviteCodes);
});
