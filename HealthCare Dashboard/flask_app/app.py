from flask import Flask, request, render_template

# Create a Flask application instance
app = Flask(__name__)

# Route for the dashboard page
@app.route('/', methods=['GET', 'POST'])
def dashboard():
    # Check if the form is submitted via POST method
    if request.method == 'POST':
        # Get the form data (name, age, file)
        name = request.form.get('name')
        age = request.form.get('age')
        file = request.files.get('file')

        # Print the submitted data for debugging
        print('Form submitted:', {'name': name, 'age': age, 'file': file.filename if file else None})

    # Render the dashboard template (GET request or after form submission)
    return render_template('dashboard.html')

# Route for the login page
def login():
    return render_template('login.html')

# Route for the signup page
@app.route('/signup')
def signup():
    return render_template('signup.html')

# Run the Flask application in debug mode
if __name__ == '__main__':
    app.run(debug=True)
