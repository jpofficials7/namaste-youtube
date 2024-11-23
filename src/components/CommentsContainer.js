import Comment from './Comment';

const commentsData = [
  {
    name: 'akshay Saini',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.1',
    replies: [
      {
        name: 'akshay Saini',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.2',
        replies: [
          {
            name: 'akshay Saini',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.3',
            replies: [
              {
                name: 'akshay Saini',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.4',
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'akshay Saini',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    replies: [
      {
        name: 'akshay Saini',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        replies: [
          {
            name: 'akshay Saini',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            replies: [
              {
                name: 'akshay Saini',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'akshay Saini',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    replies: [
      {
        name: 'akshay Saini',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        replies: [
          {
            name: 'akshay Saini',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            replies: [
              {
                name: 'akshay Saini',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

/**Here We are recursing the CommentList */
const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        {comment.replies.length > 0 && <CommentsList comments={comment.replies} />}
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
