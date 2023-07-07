export default function Form() {
  return (
    <div className="Form">
      <form className="mb-3">
        <div class="row">
          <div className="col-md-9">
            <input
              type="search"
              name="city"
              id="city"
              placeholder="Type a city"
              autocomplete="off"
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
