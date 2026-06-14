const { createApp } = Vue;

        createApp({
            data() {
                return {
                    features: [
                        {
                            icon: '📅',
                            title: 'Easy Scheduling',
                            description: 'Seamlessly schedule and manage events with our intuitive interface designed for efficiency.'
                        },
                        {
                            icon: '👥',
                            title: 'Team Collaboration',
                            description: 'Work together with your team to organize successful events with real-time updates.'
                        },
                        {
                            icon: '📊',
                            title: 'Analytics Dashboard',
                            description: 'Track event performance and attendance with comprehensive analytics tools.'
                        },
                        {
                            icon: '📱',
                            title: 'Mobile Friendly',
                            description: 'Access your events anywhere, anytime with our fully responsive mobile design.'
                        },
                        {
                            icon: '🔐',
                            title: 'Secure Platform',
                            description: 'Your data is protected with enterprise-grade security and encryption.'
                        },
                        {
                            icon: '🛠️',
                            title: '24/7 Support',
                            description: 'Get help whenever you need it with our dedicated customer support team.'
                        }
                    ],
                    events: [
                        { eventid: 'EVT10001', eventname: 'Tech Innovations Conference', category: 'Technology', durationhour: 8 },
                        { eventid: 'EVT10002', eventname: 'Startup Pitch Day', category: 'Business', durationhour: 6 },
                        { eventid: 'EVT10003', eventname: 'AI & Machine Learning Summit', category: 'Technology', durationhour: 10 },
                        { eventid: 'EVT10004', eventname: 'Cybersecurity Workshop', category: 'Technology', durationhour: 4 },
                        { eventid: 'EVT10005', eventname: 'Digital Marketing Bootcamp', category: 'Marketing', durationhour: 6 },
                        { eventid: 'EVT10006', eventname: 'Blockchain and Cryptocurrency', category: 'Finance', durationhour: 5 },
                        { eventid: 'EVT10007', eventname: 'Entrepreneurship Forum', category: 'Business', durationhour: 7 },
                        { eventid: 'EVT10008', eventname: 'Data Science Hackathon', category: 'Technology', durationhour: 12 },
                        { eventid: 'EVT10009', eventname: 'Leadership and Management Summit', category: 'Business', durationhour: 9 },
                        { eventid: 'EVT10010', eventname: 'E-commerce Strategies', category: 'Marketing', durationhour: 6 },
                        { eventid: 'EVT10011', eventname: 'AI for Business', category: 'Business', durationhour: 8 },
                        { eventid: 'EVT10012', eventname: 'IoT & Smart Devices Expo', category: 'Technology', durationhour: 7 },
                        { eventid: 'EVT10013', eventname: 'Brand Strategy and Growth', category: 'Marketing', durationhour: 5 },
                        { eventid: 'EVT10014', eventname: 'Investment and Wealth Management', category: 'Finance', durationhour: 6 },
                        { eventid: 'EVT10015', eventname: 'Financial Technology (FinTech) Summit', category: 'Finance', durationhour: 8 },
                        { eventid: 'EVT10016', eventname: 'AI Ethics and Regulations', category: 'Technology', durationhour: 4 },
                        { eventid: 'EVT10017', eventname: 'Business Analytics Workshop', category: 'Business', durationhour: 6 },
                        { eventid: 'EVT10018', eventname: 'SEO and Content Marketing', category: 'Marketing', durationhour: 7 },
                        { eventid: 'EVT10019', eventname: 'Cryptocurrency Investment Strategies', category: 'Finance', durationhour: 9 },
                        { eventid: 'EVT10020', eventname: 'Social Media Marketing Trends', category: 'Marketing', durationhour: 5 }
                    ],
                    searchId: '',
                    searchName: '',
                    searchDuration: '',
                    selectedCategory: 'All',
                    categories: ['All', 'Technology', 'Business', 'Marketing', 'Finance'],
                    form: {
                        username: '',
                        password: '',
                        confirmPassword: '',
                        category: 'Business',
                        selectedEvent: ''
                    },
                    eventCategories: ['Technology', 'Business', 'Marketing', 'Finance']
                };
            },
            computed: {
                filteredEvents() {
                    return this.events.filter(event => {
                        const matchId = this.searchId === '' ||
                            event.eventid.toLowerCase().includes(this.searchId.toLowerCase());
                        const matchName = this.searchName === '' ||
                            event.eventname.toLowerCase().includes(this.searchName.toLowerCase());
                        const matchDuration = this.searchDuration === '' ||
                            event.durationhour.toString().includes(this.searchDuration);
                        const matchCategory = this.selectedCategory === 'All' ||
                            event.category === this.selectedCategory;

                        return matchId && matchName && matchDuration && matchCategory;
                    });
                },
                categoryEvents() {
                    return this.events.filter(event => event.category === this.form.category);
                },
                passwordsMatch() {
                    if (this.form.confirmPassword === '') return null;
                    return this.form.password === this.form.confirmPassword;
                },
                passwordMatchMessage() {
                    if (this.form.confirmPassword === '') return '';
                    return this.passwordsMatch ? 'Passwords match' : 'Passwords do not match';
                },
                showSummary() {
                    return this.form.username && this.form.selectedEvent;
                }
            },
            methods: {
                handleSubmit() {
                    if (!this.passwordsMatch) {
                        alert('Passwords do not match!');
                        return;
                    }
                    alert('Registration submitted successfully!');
                }
            }
        }).mount('#app');