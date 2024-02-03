class Services {
    constructor() {
        this.usersData = []
        if (Services._instance) {
            return Services._instance
        }
      Services._instance = this;
    }
    fetchData(url) {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.usersData = data;
        })
    }

}
  
const check = new Services()

check.fetchData("https://jsonplaceholder.typicode.com/posts")
