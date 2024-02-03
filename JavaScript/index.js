function groupBy(cb) {
    newArr = []
    this.usersData.map(elem => {
        if(cb(elem)) {
            newArr.push(elem)
        }
    })
    return newArr
}

Array.prototype.groupBy = groupBy
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
