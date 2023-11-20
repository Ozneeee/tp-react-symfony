import { Button, Text } from ".";

const Primary = ({ label, placeholder, onChange, type, value, error }) => {
  return (
    <div className="w-full">
      <Text.label>{label}</Text.label>
      {error ? <Text.error color={"red"}>{error}</Text.error> : null}
      <div>
        <input
          value={value}
          type={type || "text"}
          className="w-full border-1 border-[#8C8C8C] border-solid rounded-lg p-2 text-black text-sm"
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

const Search = ({ label, placeholder, onChange, type, value, error }) => {
  return (
    <div className="w-1/2">
      <Text.label>{label}</Text.label>
      {error ? <Text.error color={"red"}>{error}</Text.error> : null}
      <div>
        <input
          value={value}
          type={type || "text"}
          className="w-full border-1 border-[#8C8C8C] border-solid rounded-lg p-2 text-black text-sm"
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export { Primary, Search };
