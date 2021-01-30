namespace backend.Model.Projects
{
    public class Project
    {
        #region Fields

        private int id;
        private string title;
        private string company;
        private string description;

        //!Add Documentation & Photos
        #endregion

        #region Getters & Setters
        public int ID
        {
            get => id;
            set => id = value;
        }
        public string Title
        {
            get => title;
            set => title = value;
        }
        public string Company
        {
            get => company;
            set => company = value;
        }
        public string Description
        {
            get => description;
            set => description = value;
        }
        #endregion

        #region Constructors
        public Project() { }
        public Project(string title)
        {
            Title = title;
        }

        public Project(string title, string company)
        {
            Title = title;
            Company = company;
        }
        #endregion

        #region Methods

        #endregion
    }
}
