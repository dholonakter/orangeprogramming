namespace backend.Model.Users
{
    public class Employee : User
    {
        #region Fields

        #endregion

        #region Getters & Setters

        #endregion

        #region Constructors
        public Employee() { }
        public Employee(string fname, string lname) : base(fname, lname)
        {
            Authorization = GetType().Name.ToUpper();
        }
        public Employee(string fname, string lname, string phone, string email)
            : base(fname, lname, phone, email)
        {
            Authorization = GetType().Name.ToUpper();
        }
        #endregion

        #region Methods

        #endregion
    }
}
