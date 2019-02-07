class CreateGroup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      location: '',
      category_id: '1',
      organizer_id: 1,
    };
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e){
    e.preventDefault();

    const group = {
      name: this.state.title,
      description: this.state.description,
      location: this.state.location,
      category_id: this.state.category_id,
      organizer_id: this.state.organizer_id
    }

    fetch('http://localhost:3000/groups',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(group)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }
}