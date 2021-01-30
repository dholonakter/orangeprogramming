namespace backend.Model.Users
{
    public abstract class User
    {
        #region Fields
        //!General User Information
        private int id;
        private string firstName;
        private string lastName;
        private string authorization;

        //!Additional Information
        private string email;
        private string phoneNumber;
        private string story;

        //!User Picture
        #endregion

        #region Getters & Setters
        //!General User
        public int ID
        {
            get => id;
            set => id = value;
        }
        public string FirstName
        {
            get => firstName;
            set => firstName = value;
        }
        public string LastName
        {
            get => lastName;
            set => lastName = value;
        }
        public string Authorization
        {
            get => authorization;
            set => authorization = value;
        }

        //!Additional Information of User
        public string Email
        {
            get => email;
            set => email = value;
        }
        public string PhoneNumber
        {
            get => phoneNumber;
            set => phoneNumber = value;
        }

        public string STory
        {
            get => story;
            set => story = value;
        }
        #endregion

        #region Constructors

        protected User() {}
        protected User(string firstName, string lastName)
        {
            FirstName = firstName;
            LastName = lastName;
        }
        protected User(string firstName, string lastName, string email)
        {
            FirstName = firstName;
            LastName = lastName;
            Email = email;
        }
        protected User(string firstName, string lastName, string phone, string email)
        {
            FirstName = firstName;
            LastName = lastName;
            PhoneNumber = phone;
            Email = email;
        }
        #endregion

        #region Methods

        #endregion
    }
}
