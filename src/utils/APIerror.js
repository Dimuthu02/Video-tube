class Apierror extends Error
{
constructor(
    statucode,
    msg="Somthing went error",
    error=[],
    stack=""
)
{
    super(msg)
    this.statuscode = statuscode;
    this.data = null;
    this.msg = msg;
    this.success = false;
    this.error=error
}

}