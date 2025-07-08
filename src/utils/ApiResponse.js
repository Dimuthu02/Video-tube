class ApiResponse{
    constructor(statuscode,data,msg="success")
    {
        this.statuscode=statuscode
        this.data=data
        this.msg=msg
        this.success=statuscode<400
    }
}
export{ApiResponse}