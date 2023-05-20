package com.brojang.jspstudy;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Calendar;

@WebServlet(name = "ServletTest", value = "/ServletTest")
public class ServletTest extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doPost(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        Calendar cal = Calendar.getInstance();

        int hour = cal.get(Calendar.HOUR_OF_DAY);
        int minute = cal.get(Calendar.MINUTE);
        int second = cal.get(Calendar.SECOND);
        int millisecond = cal.get(Calendar.MILLISECOND);

        PrintWriter out = response.getWriter();
        out.println("<html>");
        out.println("<head>");
        out.println("<title>ServletTest</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>");
        out.println(Integer.toString(hour) + ":" + Integer.toString(minute) + ":" + Integer.toString(second) + ":" + Integer.toString(millisecond));
        out.println("</h1>");
        out.println("</body></html>");
    }
}
