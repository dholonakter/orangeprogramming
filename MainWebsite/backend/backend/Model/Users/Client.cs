namespace backend.Model.Users
{
    public class Client : User
    {
        #region Fields

        #endregion

        #region Getters & Setters

        #endregion

        #region Constructors
        public Client() { }
        public Client(string fname, string lname, string email)
            : base(fname, lname, email)
        {
            Authorization = GetType().Name.ToUpper();
        }
        public Client(string fname, string lname, string phone, string email)
            : base(fname, lname, phone, email)
        {
            Authorization = GetType().Name.ToUpper();
        }
        #endregion

        #region Methods

        #endregion
    }
}
