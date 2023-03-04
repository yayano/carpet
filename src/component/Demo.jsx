const Demo = () => {
  return (
    <div className="demo">
      <h1>demo</h1>
      <form>
        <select>
          <option value="">Select carpet type</option>
          <option value="">option A</option>
          <option value="">option B</option>
          <option value="">option C</option>
        </select>
        <label>width</label>
        <input type="Number" />
        <label>height</label>
        <input type="Number" />
      </form>
    </div>
  );
};
export default Demo;
