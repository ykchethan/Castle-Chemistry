/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.47
 * Generated at: 2017-12-06 19:40:21 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.view;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class assessment_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<!DOCTYPE html>\n");
      out.write("<html lang=\"en\">\n");
      out.write("<head>\n");
      out.write("  <title>Castle</title>\n");
      out.write("  <meta charset=\"utf-8\">\n");
      out.write("  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n");
      out.write("    <!-- One -->\n");
      out.write("    <link rel=\"stylesheet\"  href=\"");
      out.print(request.getContextPath());
      out.write("/resources/lib/bootstrap3/css/bootstrap.min.css\">\n");
      out.write("    <link rel=\"stylesheet\"  href=\"");
      out.print(request.getContextPath());
      out.write("/resources/lib/bootstrap/css/bootstrap-responsive.css\">   \n");
      out.write("    \n");
      out.write("    <!-- One End -->\n");
      out.write("    \n");
      out.write("    <link rel=\"stylesheet\"  href=\"");
      out.print(request.getContextPath());
      out.write("/resources/lib/jquery-ui-1.11.1/jquery-ui.css\"/>\n");
      out.write("     <link rel=\"stylesheet\" href=\"");
      out.print(request.getContextPath());
      out.write("/resources/lib/w3/w3.css\"/>\n");
      out.write("    <link rel=\"stylesheet\" href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/main.css\"/> \n");
      out.write("    <link rel=\"stylesheet\" href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/student.css\"/>    \n");
      out.write("    <link rel=\"stylesheet\" type=\"text/css\" href=\"");
      out.print(request.getContextPath());
      out.write("/resources/css/misc_new_v2_classes.css\">    \n");
      out.write("    \n");
      out.write("    <script type=\"text/javascript\"  src=\"");
      out.print(request.getContextPath());
      out.write("/resources/lib/jquery-ui-1.11.1/external/jquery/jquery.js\"></script>\n");
      out.write("    <script type=\"text/javascript\" src=\"");
      out.print(request.getContextPath());
      out.write("/resources/lib/jquery-ui-1.11.1/jquery-ui.js\"></script>\n");
      out.write("    \n");
      out.write("    <!-- Two  -->\n");
      out.write("     <script src=\"");
      out.print(request.getContextPath());
      out.write("/resources/lib/bootstrap/js/bootstrap.min.js\"></script>\n");
      out.write("        \n");
      out.write("  <style>\n");
      out.write("\n");
      out.write("  </style>\n");
      out.write("</head>\n");
      out.write("<body id=\"body-container\">\n");
      out.write("<span style=\"display:none\"> this is assessment.jsp </span>\n");
      out.write("     <!-- Sidebar and navbar -->\n");
      out.write("<nav class=\"navbar navbar-inverse\">\n");
      out.write("  <div class=\"container-fluid\">\n");
      out.write("    <div class=\"navbar-header\">\n");
      out.write("      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n");
      out.write("        <span class=\"icon-bar\"></span>\n");
      out.write("        <span class=\"icon-bar\"></span>\n");
      out.write("        <span class=\"icon-bar\"></span>                        \n");
      out.write("      </button>\n");
      out.write("      <a class=\"navbar-brand\" href=\"#\">Castle Project</a>\n");
      out.write("    </div>\n");
      out.write("    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n");
      out.write("      <ul class=\"nav navbar-nav n-header\">\n");
      out.write("      </ul>\n");
      out.write("      <ul class=\"nav navbar-nav navbar-right\">\n");
      out.write("          <li class=\"dropdown\">\n");
      out.write("                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\"></i><span id=\"user-name\"> Student </span><b class=\"caret\"></b></a>\n");
      out.write("                <ul class=\"dropdown-menu\">\n");
      out.write("                    <li><a href=\"#\" id=\"user-profile\"><i class=\"fa fa-fw fa-power-off\"></i></a></li>\n");
      out.write("                    <li><a href=\"#\" id=\"user-cancel\"><i class=\"fa fa-fw fa-power-off\"></i> Cancel</a></li>\n");
      out.write("\n");
      out.write("                    <li class=\"divider\"></li>\n");
      out.write("                    <li><a href=\"#\" id=\"user-logout\"><i class=\"fa fa-fw fa-power-off\"></i> Log Out</a></li>\n");
      out.write("                </ul>\n");
      out.write("          </li>\n");
      out.write("      </ul>\n");
      out.write("    </div>\n");
      out.write("  </div>\n");
      out.write("</nav>\n");
      out.write("      \n");
      out.write("<div id=\"page-wrapper\">\n");
      out.write("    <!-- Main Container -->\n");
      out.write("    <div class=\"container\">\n");
      out.write("        <div class=\"row\">\n");
      out.write("\n");
      out.write("            <span id=\"netid\" class=\"display-hide\">");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${netid}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
      out.write("</span>\n");
      out.write("            <div class=\"col-sm-7\" id='pdf-container'>\n");
      out.write("                \n");
      out.write("                 <!-- 1 -->\n");
      out.write("                    <!-- PDF Window -->\n");
      out.write("                    <span id=\"expname\">Experiment Name</span>\n");
      out.write("                    <span id=\"expid\" class=\"display-hide\">");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${expid}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
      out.write("</span>\n");
      out.write("                \n");
      out.write("                    <div class=\"pdf-div\">\n");
      out.write("                            <div>\n");
      out.write("                                <!-- 1.1 -->\n");
      out.write("                                <div class=\"w3-bar w3-black\" >\n");
      out.write("                                    <button class=\"w3-bar-item w3-button w3-small pdflink w3-grey\" onclick=\"openPdf(event,'pdf')\">PDF</button>\n");
      out.write("                                    <button class=\"w3-bar-item w3-button w3-small pdflink\" onclick=\"openPdf(event,'hints-tab')\">Hints</button>\n");
      out.write("                                </div>\n");
      out.write("                            </div>\n");
      out.write("                            \n");
      out.write("                            <div>\n");
      out.write("                                <!-- 1.2 -->\n");
      out.write("                                <div id=\"pdf\" class=\"w3-container pdf w3-animate-left\">\n");
      out.write("                                </div>\n");
      out.write("\n");
      out.write("                                <div id=\"hints-tab\" class=\"w3-container pdf w3-animate-left hint-div\"  style=\"display:none\">\n");
      out.write("\n");
      out.write("                                    <h2>Hints</h2>\n");
      out.write("                                  <!--   <div>\n");
      out.write("                                      <h4>Hint 1</h4>\n");
      out.write("                                        <p>Paris is the capital of France.</p> \n");
      out.write("                                    </div><hr/>\n");
      out.write("\n");
      out.write("                                    <div>\n");
      out.write("                                      <h4>Hint 2</h4>\n");
      out.write("                                        <p>Paris is the capital of France.</p> \n");
      out.write("                                    </div><hr/> -->\n");
      out.write("                                </div>\n");
      out.write("                            </div>\n");
      out.write("                    </div>\n");
      out.write("                 <!-- 1 -->\n");
      out.write("            </div>\n");
      out.write("            \n");
      out.write("\n");
      out.write("            <div class=\"col-sm-5\" id='question-container'>\n");
      out.write("                 <!-- 2 -->\n");
      out.write("                <!-- Question Container -->\n");
      out.write("                <span id=\"modulename\">MODULE NAME</span>            \n");
      out.write("                <span id=\"moduleid\" class=\"display-hide\">");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${moduleid}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
      out.write("</span>\n");
      out.write("                  <br><p id=\"module-errors\" class=\"c-errors\"></p>\n");
      out.write("                  <br><p id=\"module-msgs\" class=\"c-msgs\"></p>\n");
      out.write("                    <div>\n");
      out.write("                        <div class=\"w3-bar bottom-margin top-margin\" id=\"question-link\">\n");
      out.write("                            \n");
      out.write("                       <!--     <button class=\"w3-bar-item w3-button w3-small tablink w3-blue\" onclick=\"openCity(event,'London')\">London</button>\n");
      out.write("                            <button class=\"w3-bar-item w3-button w3-small tablink\" onclick=\"openCity(event,'Paris')\">Paris</button>\n");
      out.write("                            <button class=\"w3-bar-item w3-button w3-small tablink\" onclick=\"openCity(event,'Tokyo')\">Tokyo</button>\n");
      out.write("\n");
      out.write("                            <button class=\"w3-bar-item w3-button w3-small tablink\" onclick=\"openCity(event,'4567')\">12345</button>\n");
      out.write("                            <button class=\"w3-bar-item w3-button w3-small tablink\" onclick=\"openCity(event,'5678')\">23</button>\n");
      out.write("                            <button class=\"w3-bar-item w3-button w3-small tablink display-hide\" onclick=\"openCity(event,'6789')\">100</button>\n");
      out.write("               -->\n");
      out.write("                        </div>                        \n");
      out.write("                    </div>\n");
      out.write("                \n");
      out.write("                    <div id=\"question-panel\">\n");
      out.write("                         <!-- 2.1 -->\n");
      out.write("                     <!-- <div id=\"London\" class=\"w3-container city w3-animate-right\">\n");
      out.write("                          <h2>London</h2>\n");
      out.write("                          <p>London is the capital city of England.</p>\n");
      out.write("                        </div>\n");
      out.write("\n");
      out.write("                        <div id=\"Paris\" class=\"w3-container city w3-animate-right\" style=\"display:none\">\n");
      out.write("                          <h2>Paris</h2>\n");
      out.write("                          <p>Paris is the capital of France.</p> \n");
      out.write("                            <button class=\"w3-btn w3-green\">Submit</button>\n");
      out.write("                        </div>\n");
      out.write("\n");
      out.write("                        <div id=\"Tokyo\" class=\"w3-container city w3-animate-right\" style=\"display:none\">\n");
      out.write("                          <h2>Tokyo</h2>\n");
      out.write("                          <p>Tokyo is the capital of Japan.</p>\n");
      out.write("                        </div>\n");
      out.write("\n");
      out.write("                        <div id=\"4567\" class=\"w3-container city w3-animate-right\" style=\"display:none\">\n");
      out.write("                          <h2>4567</h2>\n");
      out.write("                          <p>London is the capital city of England.</p>\n");
      out.write("                        </div>\n");
      out.write("\n");
      out.write("                        <div id=\"5678\" class=\"w3-container city w3-animate-right\" style=\"display:none\">\n");
      out.write("                          <h2>5678</h2>\n");
      out.write("                          <p>Paris is the capital of France.</p> \n");
      out.write("                        </div>\n");
      out.write("\n");
      out.write("                        <div id=\"6789\" class=\"w3-container city w3-animate-right\" style=\"display:none\">\n");
      out.write("                          <h2>6789</h2>\n");
      out.write("                          <p>Tokyo is the capital of Japan.</p>\n");
      out.write("                        </div>-->\n");
      out.write("                        \n");
      out.write("                         <!-- 2.2 -->\n");
      out.write("                    </div>     \n");
      out.write("                \n");
      out.write("                <!-- 2.1 -->\n");
      out.write("            </div>\n");
      out.write("\n");
      out.write("        </div>\n");
      out.write("    </div>\n");
      out.write("</div>\n");
      out.write("    \n");
      out.write("\n");
      out.write("<footer class=\"container-fluid text-center\">\n");
      out.write("  <span class=\"float-right\">&copy; CS Department</span>\n");
      out.write("</footer>\n");
      out.write("\n");
      out.write("    <script type=\"text/javascript\" src=\"");
      out.print(request.getContextPath());
      out.write("/resources/js/misc_new_v2_functions.js\"></script>  \n");
      out.write("    <script type=\"text/javascript\" src=\"");
      out.print(request.getContextPath());
      out.write("/resources/js/session-store.js\"></script>\n");
      out.write("    <script type=\"text/javascript\" src=\"");
      out.print(request.getContextPath());
      out.write("/resources/js/student/labs/assessment3.js\"></script>\n");
      out.write("    <script type=\"text/javascript\" src=\"");
      out.print(request.getContextPath());
      out.write("/resources/js/student/labs/arrangeAssessment.js\"></script>\n");
      out.write("    <script type=\"text/javascript\" src=\"");
      out.print(request.getContextPath());
      out.write("/resources/js/student/labs/assessment.js\"></script>\n");
      out.write("  \n");
      out.write("</body>\n");
      out.write("</html>\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}