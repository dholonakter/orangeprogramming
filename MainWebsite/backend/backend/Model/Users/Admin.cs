namespace backend.Model.Users
{
    public class Admin : User
    {
        #region Fields

        #endregion

        #region Getters & Setters

        #endregion

        #region Constructors
        public Admin() { }

        public Admin(string fname, string lname) : base(fname, lname)
        {
            Authorization = GetType().Name.ToUpper();
        }

        public Admin(string fname, string lname, string phone, string email)
            : base(fname, lname, phone, email)
        {
            Authorization = GetType().Name.ToUpper();
        }
        #endregion

        #region Methods

        #endregion
    }
}
