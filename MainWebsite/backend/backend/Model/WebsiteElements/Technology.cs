namespace backend.Model.WebsiteElements
{
    public class Technology
    {
        #region Fields
        private int id;
        private string name;

        #endregion

        #region Getters & Setters
        public int ID
        {
            get => id;
            set => id = value;
        }
        public string Name
        {
            get => name;
            set => name = value;
        }
        #endregion

        #region Constructors
        public Technology() { }
        public Technology(string name)
        {
            Name = name;
        }
        #endregion

        #region Methods

        #endregion
    }
}
