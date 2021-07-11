
export default class HttpHelper {
    constructor(base)
    {
        this.base = base;
    }
    getTasks()
    {

        return fetch(this.base+'/tasks.json').then((resp)=> {
          return  resp.json()
        })
    }

    addTask()
    {
        //TODO save task to db through api
    }
}
