// Type for each question

// Type for the current question data
type questionData = {
  question: string;
  options: string[];
  correctAnswer: string;
  imageSrc?: string;
};

// Type for each user
type User = {
  name: string;
  id: string;
  score: number;
};

// Type for the main data structure
type RoomData = {
  roomName: string;
  roomId: string;
  currentQuestionData: questionData;
  allQuestions: Question[];
  usersData: User[];
  creationTime: number;
};

// If the data is an array of RoomData
type RoomDataArray = RoomData[];
type gameDataType = RoomDataArray;
