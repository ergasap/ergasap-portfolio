import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/pfp.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        ¡Hola! 
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p> 
        Soy un Ingeniero Informático licenciado apasionado por el mundo del DevOps y del Cloud Computing.
        Actualmente trabajo como desarrollador DevOps especializado en la automatización de infraestructuras y optimización de procesos en entornos de Computación en la Nube. 
        Además, como DevOps, tengo experiencia en herramientas CI/CD y arquitecturas escalables, con sólida experiencia en la contenerización de servicios y gestión de contenedores con Docker y Kubernetes.
        También manejo con facilidad el proveedor pionero en el mercado: AWS y también tengo experiencia con otros como Azure o GCP.
        </p>
        <div>
          <h2>
            Experiencia
          </h2>
          <h3> Instituto de Instrumentación para Imagen Molecular (i3m) </h3>
          <div> Diciembre 2023 - Actualidad </div>
          <div>
            Durante mi estancia en el I3m formé equipo en el Grupo de Grid y Computación de Altas Prestaciones, donde tuve la oportunidad de participar en un proyecto Europeo:
            <ul>
              <li>
              Desplegué una infraestructura de cómputo en la nube sobre una solución de cloud on-premises con Kubernetes de principio a fin y gestioné su mantenimiento.
              </li>
              <li>
              Gestioné los microservicios de la infraestructura mediante objetos nativos de Kubernetes, así como el uso de Helm y de CRDs.
              </li>
              <li>
              Desplegué microservicios como Jenkins, Keycloak, Minio, Prometheus, Grafana y operadores de bases de datos de MongoDB y MySQL.
              </li>
              <li>
              Desarrollé pipelines de CI/CD en Jenkins para asegurar la reproducibilidad de un código almacenado en GitHub.
              </li>
              <li>
              Aporté soluciones eficientes a la infraestructura como el uso de funciones lambda en Azure para integrar una ejecución basada en eventos y mejorar la escalabilidad.
              </li>
              <li>
              Implementé políticas de seguridad de RBAC para una gestión de usuarios con Keycloak y así controlar el acceso a la plataforma.
              </li>
            </ul>
          </div>
          <h3> Instituto de automática e informática industrial (ai2) </h3>
          <div> Diciembre 2022 - Julio 2023 </div>
          <div>
            Durante mi estancia en el Instituto Ai2, 
            tuve el placer de desarrollar tareas mayoritariamente enfocadas al DevOps y a la Administración de Sistemas.
            <ul>
              <li>
              Contenerización y despliegue de microservicios mediante Deployments, 
              Services e Ingress en Kubernetes (simulaciones de robots y hosting de páginas webs).
              </li>
              <li>
              Despliegue y configuración de una instancia de Jenkins.
              </li>
              <li>
              Creación de una pipeline en Jenkins que dado un commit a un repositorio de Git, 
              generaba una imagen nueva, y actualizaba el pod que la ejecutaba.
              </li>
              <li>
              Creación de un dashboard de Grafana que, mediante el scraper de métricas de Prometheus, 
              permitía visualizar el estado de la memoria, el uso de cpu y de gpu de cada uno de los nodos del clúster.
              </li>
              <li>
              Desarrollo de mi TFM: “Implementación de un sistema homogéneo de autenticación 
              y autorización de un clúster de Kubernetes en el ámbito de la investigación”.
                <div>
                En este Trabajo de Fin de Master, fui capaz de desarrollar un sistema de autenticación y autorización de Single Sign-On (SSO) 
                permitiendo a los usuarios que puedan utilizar las credenciales de la UPV (Universitat Politècnica de València), 
                para un clúster de Kubernetes de uso computacional. Se desarrolló autenticación a nivel de microservicios y a nivel del CLI de Kubernetes (kubectl), 
                mediante el uso de Keycloak y Oauth2 Proxy, y autorización de uso de recursos del clúster mediante roles de RBAC.
                </div>
              </li>
            </ul>
            Tecnologías: Docker, Kubernetes, Keycloak, Oauth2 Proxy, Helm, Jenkins, Grafana, Prometheus.
          </div>
        </div>
        <div>
          <h2>
            Formación
          </h2>
          <h3> Master Universitario en Computación en la Nube y de Altas Prestaciones </h3>
          <div> Universitat de Politécnica de València (2022-2023) </div>
          <div>
          Durante el Master Universitario en Computación en la Nube y de Altas Prestaciones (MCNAP), 
          tuve la oportunidad de trabajar con tecnologías relacionadas en estas áreas a través de numerosos proyectos académicos.
          <ul>
            <li>
            Profundicé en algunas de las tecnologías básicas del ámbito del Cloud Computing como Docker, Kubernetes, Ansible, etc. 
            También pude trabajar con algunos de los proveedores en la nube más punteros como AWS o Azure.
            </li>
            <li>
            Trabajé con modelos de programación orientados a la paralelización de bucles, como MPI y OpenMP, 
            y de resolución de problemas mediante aceleración de GPU como CUDA y OpenCL.
            </li>
            <li>
            Estudié las estrategias y herramientas necesarias para el tratamiento de grandes volúmenes de datos (Big Data), como el modelo MapReduce para el análisis de grandes volúmenes de datos, 
            implementado mediante Apache Hadoop, o el uso de Apache Spark.
            </li>
          </ul>
          Tecnologías: Docker, Kubernetes, Ansible, MPI, OpenMP, Shell, CUDA, OpenCL, Apache Hadoop, Apache Spark, Kafka, ZeroMQ
          </div>
          <h3> Grado en Ingeniería Informática </h3>
          <div> Universitat de Politécnica de València (2018-2022) </div>
          <p> Tecnologías: Java, C#, C+, CSS, HTML, JavaScript </p>
        </div>
      </div>
    </section>
  );
}
