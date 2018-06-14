package ru.mobui.agrodispatcher.model;

import javax.persistence.EntityManagerFactory;

import org.apache.olingo.odata2.core.exception.ODataRuntimeException;
import org.apache.olingo.odata2.jpa.processor.api.ODataJPAContext;
import org.apache.olingo.odata2.jpa.processor.api.ODataJPAServiceFactory;
import org.apache.olingo.odata2.jpa.processor.api.exception.ODataJPARuntimeException;

public class AgroDispatcherServiceFactory extends ODataJPAServiceFactory {

	@Override
	public ODataJPAContext initializeODataJPAContext() throws ODataJPARuntimeException {
		ODataJPAContext oDataJPAContext = this.getODataJPAContext();
		EntityManagerFactory emf;
		try {
			emf = JpaEntityManagerFactory.getEntityManagerFactory();
			oDataJPAContext.setEntityManagerFactory(emf);
			oDataJPAContext.setPersistenceUnitName(Constants.PERSISTENCE_UNIT_NAME);
			oDataJPAContext.setJPAEdmExtension(new AgroDispatcherProcessingExtension());
			oDataJPAContext.setJPAEdmMappingModel(Constants.EDM_MAPPING);
			return oDataJPAContext;
		} catch (Exception e) {
			throw new ODataRuntimeException(e);
		}
	}

}
