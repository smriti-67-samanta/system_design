
class TaskManager {
  private tasks: Map<string, string> = new Map();

  createTask(name: string): string {
    const taskId = `task_${Date.now()}`;
    this.tasks.set(taskId, name);
    console.log(`Creating task: ${name} (ID: ${taskId})`);
    return taskId;
  }

  deleteTask(taskId: string): boolean {
    if (this.tasks.has(taskId)) {
      const taskName = this.tasks.get(taskId);
      this.tasks.delete(taskId);
      console.log(`Deleted task: ${taskName} (ID: ${taskId})`);
      return true;
    }
    console.log(`Task not found: ${taskId}`);
    return false;
  }

  updateTask(taskId: string, newName: string): boolean {
    if (this.tasks.has(taskId)) {
      const oldName = this.tasks.get(taskId);
      this.tasks.set(taskId, newName);
      console.log(`Updated task: ${oldName} -> ${newName} (ID: ${taskId})`);
      return true;
    }
    return false;
  }

  listTasks(): void {
    console.log("Current tasks:");
    this.tasks.forEach((name, id) => {
      console.log(`  - ${name} (${id})`);
    });
  }
}


class EmailService {
  sendEmail(to: string, subject: string, body: string): void {
    console.log(`📧 Email sent to: ${to}`);
    console.log(`   Subject: ${subject}`);
    console.log(`   Body: ${body}`);
    console.log(`   ---`);
  }

  sendBulkEmails(recipients: string[], subject: string, body: string): void {
    console.log(`📧 Sending bulk emails to ${recipients.length} recipients:`);
    recipients.forEach(recipient => {
      this.sendEmail(recipient, subject, body);
    });
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    if (!isValid) {
      console.log(`❌ Invalid email format: ${email}`);
    }
    return isValid;
  }
}


class TaskNotificationService {
  private taskManager: TaskManager;
  private emailService: EmailService;

  constructor() {
    this.taskManager = new TaskManager();
    this.emailService = new EmailService();
  }

  createTaskWithNotification(taskName: string, assigneeEmail: string): string | null {
   
    if (!this.emailService.validateEmail(assigneeEmail)) {
      console.log(`❌ Cannot create task. Invalid email: ${assigneeEmail}`);
      return null;
    }

    
    const taskId = this.taskManager.createTask(taskName);

    
    this.emailService.sendEmail(
      assigneeEmail,
      `New Task Assigned: ${taskName}`,
      `Hello,\n\nYou have been assigned a new task: "${taskName}".\nTask ID: ${taskId}\n\nPlease complete it by the deadline.\n\nBest regards,\nTask Management System`
    );

    return taskId;
  }

  completeTaskAndNotify(taskId: string, completerEmail: string): void {
    if (!this.emailService.validateEmail(completerEmail)) {
      console.log(`❌ Invalid email: ${completerEmail}`);
      return;
    }

    console.log(`✅ Task ${taskId} marked as completed by ${completerEmail}`);
    
    this.emailService.sendEmail(
      completerEmail,
      `Task Completed`,
      `Your task (ID: ${taskId}) has been marked as completed. Thank you!`
    );
  }
}


function demonstrateSRP(): void {
  console.log("=== SINGLE RESPONSIBILITY PRINCIPLE DEMONSTRATION ===\n");

 
  console.log("1. TASK MANAGER (Only manages tasks):");
  console.log("--------------------------------------");
  const taskManager = new TaskManager();
  const task1 = taskManager.createTask("Design database schema");
  const task2 = taskManager.createTask("Write API documentation");
  taskManager.listTasks();
  taskManager.updateTask(task1, "Design database schema v2");
  taskManager.listTasks();

  console.log("\n2. EMAIL SERVICE (Only handles emails):");
  console.log("---------------------------------------");
  const emailService = new EmailService();
  emailService.sendEmail("john@example.com", "Welcome", "Welcome to our platform!");
  emailService.sendBulkEmails(
    ["alice@example.com", "bob@example.com"], 
    "Meeting Reminder", 
    "Don't forget the meeting at 3 PM"
  );

  console.log("\n3. COORDINATED SERVICE (Uses both):");
  console.log("-----------------------------------");
  const notificationService = new TaskNotificationService();
  notificationService.createTaskWithNotification(
    "Refactor authentication system",
    "developer@example.com"
  );
  
  
  notificationService.createTaskWithNotification(
    "Fix UI bugs",
    "invalid-email"
  );
}


demonstrateSRP();