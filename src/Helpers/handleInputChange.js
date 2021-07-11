
export default function handleInputChange (e, mutator, old) {
    let {value, name, type, checked} = e.target;
    value = type === "checkbox" ? checked : value;
    mutator({...old, [name]: value});
}
