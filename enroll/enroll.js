        // Your JavaScript code here
        const courses = [
            { id: 1, name: "Mathematics", materials: ["Math Book", "Math Workbook"], assignments: ["Homework 1", "Quiz 1"] },
            { id: 2, name: "Science", materials: ["Science Book", "Lab Manual"], assignments: ["Lab Report", "Midterm Exam"] },
            { id: 3, name: "History", materials: ["History Book"], assignments: ["Research Paper"] }
        ];

        const enrolledCourses = [];

        const coursesContainer = document.getElementById('courses');
        const enrolledList = document.getElementById('enrolled-list');
        const courseInfo = document.getElementById('course-info');
        const courseName = document.getElementById('course-name');
        const courseMaterials = document.getElementById('course-materials');
        const assignments = document.getElementById('assignments');

        courses.forEach(course => {
            const courseDiv = document.querySelector(`[data-course-id="${course.id}"]`);
            courseDiv.addEventListener('click', () => {
                if (!enrolledCourses.includes(course.id)) {
                    enrolledCourses.push(course.id);
                    const listItem = document.createElement('li');
                    listItem.textContent = course.name;
                    enrolledList.appendChild(listItem);
                }

                courseName.textContent = course.name;
                courseMaterials.innerHTML = course.materials.map(material => `<li>${material}</li>`).join('');
                assignments.innerHTML = course.assignments.map(assignment => `<li>${assignment}</li>`).join('');
                courseInfo.style.display = 'block';
            });
        });
    
