new Vue({
    el: '#app',
    data: {
        contacts: [],
        newContact: {
            name: '',
            email: '',
            phone: ''
        },
        editMode: false,
        editedContact: {
            name: '',
            email: '',
            phone: ''
        },
        editedIndex: null
    },
    methods: {
        addContact() {
            this.contacts.push({ ...this.newContact });
            this.newContact.name = '';
            this.newContact.email = '';
            this.newContact.phone = '';
        },
        editContact(index) {
            this.editMode = true;
            this.editedIndex = index;
            this.editedContact = { ...this.contacts[index] };
        },
        updateContact() {
            this.contacts.splice(this.editedIndex, 1, { ...this.editedContact });
            this.cancelEdit();
        },
        cancelEdit() {
            this.editMode = false;
            this.editedIndex = null;
            this.editedContact = { name: '', email: '', phone: '' };
        },
        deleteContact(index) {
            this.contacts.splice(index, 1);
        }
    }
});