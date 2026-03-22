function Contact(props) {
  return (
    <div
      className="row p-md-2 mb-2"
      style={{ borderRadius: "20px", border: "1px solid #565" }}
    >
      <div className="col-2 pt-2">Image</div>
      <div className="col-6 text-warning pt-0">
        <span className="h4">NAME</span>
        <br />
        <span className="text-white-50">
          EMAIL
          <br />
          PHONE
        </span>
      </div>
      <div className="col-1 pt-2">
        <button className="btn btn-primary btn-sm m-1">
          <i class="bi bi-star-fill"></i>
        </button>
      </div>

      <div className="col-3 pt-2">
        <button className="btn btn-info btn-sm m-1">
          <i class="bi bi-pencil-square"></i>
        </button>

        <button className="btn btn-danger btn-sm m-1">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Contact;
