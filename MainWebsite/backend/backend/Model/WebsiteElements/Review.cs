using backend.Model.Users;

namespace backend.Model.WebsiteElements
{
    public class Review
    {
        #region Fields

        private int id;
        private User individual;
        private int rating;
        private string message;
        #endregion

        #region Getters & Setters
        public int ID
        {
            get => id;
            set => id = value;
        }
        public User Individual
        {
            get => individual;
            set => individual = value;
        }
        public int Rating
        {
            get => rating;
            set => rating = value;
        }
        public string Message
        {
            get => message;
            set => message = value;
        }
        #endregion

        #region Constructors
        public Review() { }

        public Review(User user, int rating, string message)
        {
            Individual = user;
            Rating = rating;
            Message = message;
        }
        #endregion

        #region Methods

        #endregion
    }
}
