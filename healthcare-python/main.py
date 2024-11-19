import tkinter as tk
from tkinter import filedialog, messagebox

def submit():
    name = name_entry.get()
    age = age_var.get()
    if not name or not age or not file_path.get():
        messagebox.showwarning("Input Error", "All fields are required.")
        return
    messagebox.showinfo("Submission", f"Name: {name}\nAge: {age}\nFile: {file_path.get()}")

def upload_file():
    file = filedialog.askopenfilename()
    if file:
        file_path.set(file)

app = tk.Tk()
app.title("Healthcare Dashboard")
app.geometry("400x300")

tk.Label(app, text="Healthcare Dashboard", font=("Arial", 18)).pack(pady=10)

tk.Label(app, text="Name").pack()
name_entry = tk.Entry(app, width=30)
name_entry.pack()

tk.Label(app, text="Age").pack()
age_var = tk.StringVar(value="Select Age")
age_menu = tk.OptionMenu(app, age_var, *[str(i) for i in range(101)])
age_menu.pack()

tk.Label(app, text="File Upload").pack()
file_path = tk.StringVar()
tk.Button(app, text="Upload File", command=upload_file).pack()
tk.Label(app, textvariable=file_path).pack()

tk.Button(app, text="Submit", command=submit).pack(pady=20)

app.mainloop()
