import getGamingData from "../../socket/functions/get-gaming-data/getGamingData";
import saveGamingData from "../file-system/saveGamingData";

const increaseScoreOfThePlayer = async (
  data: dataTypeForIncreasingPlayerScore
) => {
  const { roomId, playerId } = data;
  const gamingData = await getGamingData();
  for (let i = 0; i < gamingData.length; i++) {
    const singleRoomData = gamingData[i];
    if (roomId === singleRoomData.roomId) {
      for (let i = 0; i < singleRoomData.usersData.length; i++) {
        const singleUserData = singleRoomData.usersData[i];
        singleUserData.score = singleUserData.score + 5;
      }
    }
  }
  await saveGamingData(gamingData);
};

export default increaseScoreOfThePlayer;
