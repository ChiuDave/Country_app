import { useState } from "react";
import { Button, Form, Icon, Input } from "semantic-ui-react";


const Formulaire = () => {
    const quiz = [
        {
            question:'Quel est le currency pour le Japon?',
            option1:'Yen',
            option2:'Us',
            option3:'Can',
            option4:'Peso',
            reponse:1,
        },
        {
            question:'Quel est le currency pour le Canada?',
            option1:'Dollar',
            option2:'Franc',
            option3:'Can',
            option4:'Won',
            reponse:3,
        },
        {
            question:'Quel est le currency pour les États-Unis?',
            option1:'Dollard',
            option2:'USD',
            option3:'Sterling',
            option4:'Rupee',
            reponse:2,
        },
        {
            question:'Quel est le currency pour la Chine?',
            option1:'Baht',
            option2:'Yuan',
            option3:'',
            option4:'',
            reponse:'',
        },
        {
            question:'Quel est le currency pour la France?',
            option1:'',
            option2:'',
            option3:'',
            option4:'',
            reponse:'',
        },
    ]

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        phone: '',
        date: '',
      });
     
     
      const [error, setError] = useState('');
      const [success, setSuccess] = useState('');
     
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
     
      /*
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulaire soumis avec ces données :', formData);
      };
     */
     
      const isPasswordUppercase = (password) => {
       const condition = /^[A-Z]*$/
       return condition.test(password)
      }
     
      const isPasswordSpecial = (password) => {
       const condition = /^[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/
       return condition.test(password)
      }
     
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData.username.trim().length)
        // Votre logique de validation et de soumission du formulaire ici
        if (!formData.username.trim() && !formData.password.trim() && !formData.email.trim() && !formData.phone.trim() && !formData.date.trim())  {
         setError('Une erreur est survenue lors de la soumission du formulaire.');
         setSuccess('');
        } else if (formData.username.trim().length < 5 || formData.username.trim().length > 15){
          setError('Le username doit être entre 5 à 15 caractères.');
          setSuccess('');
        } else if(formData.password.trim().length < 8 && !isPasswordUppercase(formData.password.trim()) && !isPasswordSpecial(formData.password.trim())){
         setError('Le mot de passe doit avoir une longueur de 8 caractères/doit contenir une lettre Majuscule/contenir un caractère spéciale');
         setSuccess('');
        }
        
        
        
        else {
          setSuccess('Le formulaire a été soumis avec succès !');
          setError('');
        }
      };
  
    return (
        <div style={{ width: '300px', margin: 'auto', paddingTop: '50px' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Nom d'utilisateur:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Mot de passe:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
           <label>Email:</label>
           <Input iconPosition='left' placeholder='Email' >
             <Icon name='at' />
               <input 
                 type='email'
                 name='email'
                 value={formData.email}
                 onChange={handleChange}
               />
             </Input>
          </Form.Field>
          <Form.Field>
           <label>Phone:</label>
           <Input 
             type='tel'
             name='phone'
             pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required
             value={formData.phone}
             onChange={handleChange}
           />
           <br />
           <label>Format demandé: 514-090-1010</label>
          </Form.Field>
          <Form.Field>
           <label>Date:</label>
             <input 
               type='date'
               name='date'
               placeholder='dd-mm-yyyy'
               value={formData.date}
               onChange={handleChange}
             />
          </Form.Field>
          <Button type="submit" primary>Soumettre</Button>
        </Form>
        {error && <div className="ui negative message">{error}</div>}
        {success && <div className="ui positive message">{success}</div>}
      </div>
    );
  };
  
  export default Formulaire;