package io.codekaffee.vendasapi.dto;

import java.util.LinkedHashSet;
import java.util.Set;


public class ErrorMsg {
    private String msg;
    private Long responseStatus;
    private Set<String> violations = new LinkedHashSet<>();

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Long getResponseStatus() {
        return responseStatus;
    }

    public void setResponseStatus(Long responseStatus) {
        this.responseStatus = responseStatus;
    }

    public Set<String> getViolations() {
        return violations;
    }

    public void setViolations(Set<String> violations) {
        this.violations = violations;
    }
}
