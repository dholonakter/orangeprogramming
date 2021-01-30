namespace backend.Model.WebsiteElements
{
    public class ProcessPlan
    {
        #region Fields
        private int id;
        private string description;
        #endregion

        #region Getters & Setters
        public int ID
        {
            get => id;
            set => id = value;
        }

        public string Description
        {
            get => description;
            set => description = value;
        }
        #endregion

        #region Constructors
        public ProcessPlan() { }

        public ProcessPlan(string description)
        {
            Description = description;
        }
        #endregion

        #region Methods

        #endregion
    }
}
